/* 格式化远程数据
res：  返回数据
type ： 切割类型
data：容器
path : 路径地址
 */
export function formatPeripheralData(
  res: string,
  type: string,
  data: any,
  path: string
) {
  const formatData = res && (res.split('</a>').slice(0, -1) as any);
  formatData.forEach((el: string, index: number) => {
    if (el?.split(type)[1]) {
      const item = {
        path: path + el.split(type)[1],
        name: el.split(type)[1].split('.')[0],
        id: path.split('/')[2] + index,
      };
      data.push(item);
    }
  });
}
