/** 定义 Todo 接口，表示一个待办事项 */
export interface Todo {
  id: number; // 待办事项的唯一标识
  text: string; // 待办事项的描述
  completed: boolean; // 待办事项是否已完成
}

/** 定义 Input 组件的 Props 接口 */
export interface InputProps {
  onAdd: (value: string) => void; // 添加待办事项的回调函数
}

/** 定义 Item 组件的 Props 接口 */
export interface ItemProps {
  todo: Todo; // 待办事项数据
  onDelete: (id: number) => void; // 删除待办事项的回调函数
  onToggle: (id: number) => void; // 切换待办事项完成状态的回调函数
}
