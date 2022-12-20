import React from 'react';
export interface IButtonProps {
  text: string;
  onclick: () => void;
}
export function Button(props: IButtonProps) {
  return (
    <button type="button" onClick={props.onclick} className="btn btn-primary btn-block">
      {props.text}
    </button>
  );
}