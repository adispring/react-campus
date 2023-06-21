/** 待办事项 */
export interface Todo {
  /** 唯一标识 */
  id: number;

  /** 内容 */
  text: string;

  /** 是否已完成 */
  completed: boolean;
}

/** Input 组件的 Props */
export interface InputProps {
  /** 添加待办事项 */
  onAdd: (value: string) => void;
}

/** Item 组件的 Props */
export interface ItemProps {
  /** 待办事项数据 */
  todo: Todo;

  /** 删除待办事项 */
  onDelete: (id: number) => void;

  /** 切换待办事项完成状态 */
  onToggle: (id: number) => void;
}
