import * as React from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'
import { ModalContext, useModal } from './useModal'
import { Props, AnimationState, AnimationPropArg, StyledProps, Utils } from '@nixjs23n6/baseui-core'
import { useDocument, useSyncRefs, useIsomorphicEffect, useOutsideClick } from '@nixjs23n6/baseui-hook'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import { ModalStyled } from './styled'
import { DURATION_MS, defaultStyle, transitionStyles } from './animation'

const DEFAULT_PORTAL_TAG = React.Fragment

export interface BaseModalRenderPropArg {
    id?: string
    onClose: () => void
    showClose?: boolean
    closeOnEsc?: boolean
}

const createEl = (doc: Document, id: string): HTMLDivElement => {
    const el = doc.createElement('div')
    el.setAttribute('id', id)
    doc.body.appendChild(el)

    return el
}

const BaseModal = Utils.forwardRefWithAs(function BaseModal<TTag extends React.ElementType = typeof DEFAULT_PORTAL_TAG>(
    props: Props<TTag, BaseModalRenderPropArg> &
        AnimationPropArg & {
            open?: boolean
            unmountOnExit?: boolean
            overlayClassName?: string
            dialogClassName?: string
            containerClassName?: string
            contentClassName?: string
            delay?: number
        } & StyledProps,
    ref: React.Ref<HTMLDivElement>
) {
    const {
        id = 'react-modal',
        children,
        className,
        dialogClassName,
        overlayClassName,
        containerClassName,
        contentClassName,
        animation = false,
        animationName = 'fadeIn',
        animationDuration,
        delay = 100,
        open = false,
        unmountOnExit = false,
        closeOnEsc = true,
        closeOnClickOutside = true
    } = props
    const { onClose } = useModal()

    const internalPortalRootRef = React.useRef<HTMLDivElement | null>(null)
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const [container, setContainer] = React.useState<HTMLElement>()

    const portalRef = useSyncRefs(ref, internalPortalRootRef)

    const ownerDocument = useDocument(internalPortalRootRef)

    const internalPortalContainerRef = React.useRef<HTMLDivElement | null>(null)

    useOutsideClick(internalPortalContainerRef, () => {
        closeOnClickOutside && onClose()
    })

    useIsomorphicEffect(() => {
        if (!open || !ownerDocument) return () => null
        setContainer(ownerDocument.getElementById('react-modal') || createEl(ownerDocument, 'react-modal'))
        setTimeout(() => {
            internalPortalRootRef.current?.classList.remove('inactive')
            internalPortalRootRef.current?.classList.add('active')
        }, delay)

        return () => {
            if (!container) return

            setTimeout(() => {
                if (unmountOnExit) {
                    container.remove()
                } else {
                    internalPortalRootRef.current?.classList.remove('active')
                    internalPortalRootRef.current?.classList.add('inactive')
                }
            }, delay)
        }
    }, [container, open])

    useIsomorphicEffect(() => {
        if (!open || !container) return () => null

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
                typeof props.onEsc === 'function' && props.onEsc()
            }
        }

        closeOnEsc && document.addEventListener('keydown', handleKeyDown)

        return () => {
            closeOnEsc && document.removeEventListener('keydown', handleKeyDown)
        }
    }, [container, closeOnEsc])

    return !container
        ? null
        : createPortal(
              <ModalStyled overrideStyled={props.overrideStyled}>
                  <div
                      ref={portalRef}
                      id={id}
                      className={classNames('modal', className, {
                          active: open,
                          inactive: !open
                      })}
                  >
                      <div className={classNames('modal-overlay', overlayClassName)} aria-hidden="true" />
                      <Transition
                          in={props.open}
                          timeout={animationDuration || DURATION_MS}
                          appear
                          unmountOnExit={unmountOnExit}
                          nodeRef={containerRef}
                      >
                          {(state) => (
                              <div className={classNames('modal-container', containerClassName)} ref={containerRef}>
                                  <div
                                      className={classNames('modal-dialog', dialogClassName)}
                                      style={
                                          animation
                                              ? {
                                                    ...defaultStyle[animationName || 'fadeIn'],
                                                    ...transitionStyles[animationName || 'fadeIn'][state as AnimationState]
                                                }
                                              : null
                                      }
                                  >
                                      <span className="modal-center" aria-hidden="true" />
                                      <div ref={internalPortalContainerRef} className={classNames('modal-content', contentClassName)}>
                                          <>
                                              {props.showClose && (
                                                  <button type="button" className="modal-btn-close" aria-label="Close" onClick={onClose}>
                                                      <svg viewBox="0 0 15 15" width="14" height="14">
                                                          <g stroke="currentColor" strokeWidth="3.1">
                                                              <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25" />
                                                          </g>
                                                      </svg>
                                                  </button>
                                              )}
                                              {children}
                                          </>
                                      </div>
                                  </div>
                              </div>
                          )}
                      </Transition>
                  </div>
              </ModalStyled>,
              container
          )
})

const DEFAULT_GROUP_TAG = React.Fragment

interface BaseModalRootPropArg {}

const ModalRoot = Utils.forwardRefWithAs(function Modal<TTag extends React.ElementType = typeof DEFAULT_GROUP_TAG>(
    props: Props<TTag, BaseModalRootPropArg> & {
        id?: string
        open?: boolean
        showClose?: boolean
        unmountOnExit?: boolean
        onClose?: () => void
        onEsc?: () => void
        closeOnEsc?: boolean
        closeOnClickOutside?: boolean
        overlayClassName?: string
        dialogClassName?: string
        containerClassName?: string
        contentClassName?: string
        delay?: number
    } & AnimationPropArg &
        StyledProps,
    ref: React.Ref<HTMLElement>
) {
    const onCloseModal = React.useCallback(() => {
        if (props.onClose && typeof props.onClose === 'function') {
            props.onClose()
        }
    }, [])

    return (
        <ModalContext.Provider
            value={{
                onClose: onCloseModal
            }}
        >
            <BaseModal
                animationName={props.animationName}
                animationDuration={props.animationDuration}
                open={props.open}
                ref={ref}
                unmountOnExit={props.unmountOnExit}
                closeOnEsc={props.closeOnEsc}
                closeOnClickOutside={props.closeOnClickOutside}
                {...props}
            />
        </ModalContext.Provider>
    )
})

export const Modal = Object.assign(ModalRoot, {
    Header,
    Body,
    Footer,
    useModal
})
