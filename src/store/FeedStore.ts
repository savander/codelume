import { defineStore } from "pinia";
import { ref } from "vue";
import { PayloadType } from '@/components/molecule/Payloads/PayloadsDefinition.ts'
import { Color } from '@/types'

export interface Payload {
  type: PayloadType;
  content: any;
  origin: {
    function_name: string;
    file: string;
    line_number: number;
    hostname: string;
  };
}

export interface FeedLine {
  uuid: string;
  payloads: Payload[];
  meta: any;
  created_at: Date;
  color: Color;
}

const defaultColor = Color.Gray

export const useFeedStore = defineStore("feedLines", () => {
  const feedLines = ref<FeedLine[]>([]);

  // Add a feed line to the store
  const addFeed = (feedLine: FeedLine) => {
    console.log({ feedLine });

    // If the feed line is a color feed line, we update the current color
    if (hasPayloadType(feedLine, PayloadType.Color)) {
      const color = feedLine.payloads[0].content.color as Color

      // We update the color of the previous feed line
      const foundFeedLine = findFeedLine(feedLine.uuid);
      if (foundFeedLine) {
        foundFeedLine.color = color
      }

      return
    }

    // If the feed line is a clear all feed line, we clear all the feed lines
    if (hasPayloadType(feedLine, PayloadType.ClearAll)) {
      clearAll()
      return
    }

    feedLine.created_at = new Date()
    feedLine.color = defaultColor

    // We push the feed line to the feed lines
    feedLines.value.push(feedLine);
  };

  const hasPayloadType = (feedLine: FeedLine, type: PayloadType) => {
    return feedLine.payloads.some((payload) => payload.type === type)
  }

  const findFeedLine = (uuid: string) => {
    // return feedLines.value.findIndex((feedLine) => feedLine.uuid === uuid)
    return feedLines.value.find((feedLine) => feedLine.uuid === uuid)
  }

  const clearAll = () => {
    feedLines.value = []
  }

  return {
    feedLines,

    addFeed,
    clearAll,
  };
});
