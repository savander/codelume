import { Payload } from '@/store/FeedStore.ts'

export enum PayloadType {
  // Actions
  Color = 'color',
  ClearAll = 'clear_all',

  // Content
  Text = 'text',
  Table = 'table',

  Log = 'log',
  ApplicationLog = 'application_log',
  JsonString = 'json_string',
  Exception = 'exception',
  Trace = 'trace',
  EloquentModel = 'eloquent_model',
  ExecutedQuery = 'executed_query',

  Custom = 'custom',
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

export interface ApplicationLogPayload extends Payload {
  content: {
    context: string,
    value: string,
  }
}

export interface JsonStringPayload extends Payload {
  content: {
    value: string,
  }
}

export interface ExceptionPayload extends Payload {
  content: {
    class: string,
    message: string,
    frames: {
      class: string,
      file_name: string,
      line_number: number,
      method: string,
      vendor_frame: boolean,
    }[],
    meta?: Array<any> | Object | any,
  }
}

export interface TracePayload extends Payload {
  content: {
    frames: {
      class: string,
      file_name: string,
      line_number: number,
      method: string,
      vendor_frame: boolean,
    }[],
  }
}

export interface EloquentModelPayload extends Payload {
  content: {
    attributes: string,
    class_name: string,
    relations: string,
  }
}

export interface ExecutedQueryPayload extends Payload {
  content: {
    sql: string,
  }
}
