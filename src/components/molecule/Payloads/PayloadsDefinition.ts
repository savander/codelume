import { Payload } from '@/store/FeedStore.ts'

export enum PayloadType {
  // Actions
  Color = 'color',
  ClearAll = 'clear_all',

  // Content
  Custom = 'custom',
  Text = 'text',
  Log = 'log',
  Table = 'table',
}

export interface CustomPayload extends Payload {
  content: {
    content: string,
    label: string,
  }
}


export interface TablePayload extends Payload {
  content: {
    label: string,
    values: string[],
  }
}

export interface LogPayload extends Payload {
  content: {
    meta: {
      clipboard_data: string,
    }[],
    values: string[],
  }
}


