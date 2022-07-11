export namespace CalendarTypes {
    export type APM = 'AM' | 'PM'

    export type Mode = 'MONTH' | 'YEAR' | 'DECADE'

    export interface Time {
        hour?: string
        minute?: string
        apm?: APM
    }
}
