import { defineStore } from "pinia";
import { ref } from "vue";

export interface Log {
  uuid: string;
  payloads: {
    type: string;
    content: any;
    origin: {
      function_name: string;
      file: string;
      line_number: number;
      hostname: string;
    };
  }[];
  meta: any;
  created_at: Date;
}

export const useLogsStore = defineStore("logs", () => {
  const logs = ref<Log[]>([]);

  // Add a log to the store
  const addLog = (log: Log) => {
    log.created_at = new Date()
    logs.value.push(log);
  };

  return {
    logs,

    addLog,
  };
});
