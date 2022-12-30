import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

// 请求前缀
export const resUrl = '/metadata/v1/metadata/openeuler/opendesign';

export function getPackages(path: string) {
  return request.get(resUrl + path).then((res: AxiosResponse) => res.data);
}
