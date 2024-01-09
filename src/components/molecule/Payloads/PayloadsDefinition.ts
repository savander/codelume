import { Payload } from '@/store/FeedStore.ts'

export enum PayloadType {
  Custom = 'custom',
  Text = 'text',
  Log = 'log',
  Color = 'color',
}

export interface CustomPayload extends Payload {
  content: {
    content: string,
    label: string,
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


