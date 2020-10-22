import { isValidElement, ComponentChildren, toChildArray, VNode } from 'preact';

export const getValidChildren = <T = any>(children: ComponentChildren) =>
  toChildArray(children).filter(child => isValidElement(child)) as VNode<T>[];
