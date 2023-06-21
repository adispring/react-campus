/** 待办事项 */
export interface Todo {
  id: number; // 唯一标识
  text: string; // 内容
  completed: boolean; // 是否已完成
}

/** Input 组件的 Props */
export interface InputProps {
  onAdd: (value: string) => void; // 添加待办事项的回调函数
}

/** Item 组件的 Props */
export interface ItemProps {
  todo: Todo; // 待办事项数据
  onDelete: (id: number) => void; // 删除待办事项的回调函数
  onToggle: (id: number) => void; // 切换待办事项完成状态的回调函数
}
