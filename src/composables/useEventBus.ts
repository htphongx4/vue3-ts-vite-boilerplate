import { Emitter, EventType } from "mitt";
import { inject } from "vue";

type EmitterType = Emitter<Record<EventType, unknown>>

export default function useEventBus() {
  const emitter = inject<EmitterType>("emitter");
  return emitter;
}
