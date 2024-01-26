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
      colorizeFeedLine(feedLine.uuid, feedLine.payloads[0].content.color as Color)
      return
    }

    // If the feed line is a clear all feed line, we clear all the feed lines
    if (hasPayloadType(feedLine, PayloadType.ClearAll)) {
      clearAll()
      return
    }

    // If the feed line already exists, we merge the payloads, always last
    if (findFeedLine(feedLine.uuid)) {
      mergeFeedLine(feedLine)
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

  const colorizeFeedLine = (uuid: string, color: Color) => {
    const feedLine = findFeedLine(uuid);

    if (! feedLine) {
      return
    }

    feedLine.color = color
  }

  const clearAll = () => {
    feedLines.value.splice(0, feedLines.value.length)
  }

  const mergeFeedLine = (newFeedLine: FeedLine) => {
    const feedLine = findFeedLine(newFeedLine.uuid);

    if (! feedLine) {
      return
    }

    feedLine.payloads.push(...newFeedLine.payloads)
  }

  const findFeedLine = (uuid: string) => {
    return feedLines.value.find(
      (feedLine) => feedLine.uuid === uuid
    )
  }

  return {
    feedLines,

    addFeed,
    clearAll,
  };
});
