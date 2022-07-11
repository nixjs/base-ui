import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Calendar } from '@nixjs23n6/baseui-calendar'

export default {
    title: 'Data Entry/Calendar',
    argTypes: {}
} as ComponentMeta<any>

export const Default: React.FC = () => {
    const [date, setDate] = React.useState<Date | null>(new Date())

    const handleSelectDate = (e: Date) => {
        if (e) {
            setDate(new Date(e))
        }
    }
    return (
        <div className="container-box">
            <Calendar date={date} onChange={handleSelectDate} />
        </div>
    )
}
