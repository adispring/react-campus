/**
 * 定义 Todo 接口，表示一个待办事项
 */
export interface Todo {
  /** 待办事项的唯一标识 */
  id: number;

  /** 待办事项的描述 */
  text: string;

  /** 待办事项是否已完成 */
  completed: boolean;
}

/**
 * 定义 InputProps 接口，表示待办事项输入框的属性
 */
export interface InputProps {
  /** 输入框的值 */
  value: string;

  /**
   * 输入框值改变时的回调函数
   * @param value 输入框的值
   */
  onChange: (value: string) => void;

  /** 添加待办事项的回调函数 */
  onAddTodo: () => void;
}

/**
 * 定义 ItemProps 接口，表示待办事项组件的属性
 */
export interface ItemProps {
  /** 待办事项数据 */
  todo: Todo;

  /**
   * 删除待办事项的回调函数
   * @param id 待办事项的唯一标识
   */
  onDeleteTodo: (id: number) => void;

  /**
   * 切换待办事项完成状态的回调函数
   * @param id 待办事项的唯一标识
   */
  onToggleTodo: (id: number) => void;
}
