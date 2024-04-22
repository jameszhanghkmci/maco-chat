import { MACO_CHAT_TRACE_HEADER, MACO_CHAT_TRACE_ID, TracePayload } from '@/const/trace';

export const getTracePayload = (req: Request): TracePayload | undefined => {
  const header = req.headers.get(MACO_CHAT_TRACE_HEADER);
  if (!header) return;

  return JSON.parse(Buffer.from(header, 'base64').toString('utf8'));
};

export const getTraceId = (res: Response) => res.headers.get(MACO_CHAT_TRACE_ID);

const createTracePayload = (data: TracePayload) => {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(JSON.stringify(data));

  return Buffer.from(buffer).toString('base64');
};

export const createTraceHeader = (data: TracePayload) => {
  return { [MACO_CHAT_TRACE_HEADER]: createTracePayload(data) };
};
