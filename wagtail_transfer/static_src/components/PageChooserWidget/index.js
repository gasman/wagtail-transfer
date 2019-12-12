import * as React from 'react';

import { createReactPageChooser } from '../../chooser';

export default function PageChooserWidget({ apiBaseUrl, value, onChange }) {
  const onClickChoose = () => {
    createReactPageChooser(apiBaseUrl, [], 'root', newValue => {
      onChange(newValue);
    });
  };
  const onClickClear = () => {
    onChange(null);
  };

  const classNames = ['chooser'];

  if (value !== null) {
    return (
      <div className={classNames.join(' ')}>
        <div className="chosen">
          <span className="title">{value.title}</span>

          <ul className="actions">
            <li>
              <button
                type="button"
                className="button action-choose button-small button-secondary"
                onClick={onClickChoose}
              >
                Change
              </button>
            </li>
            <li>
              <button
                type="button"
                className="button action-clear button-small button-secondary"
                onClick={onClickClear}
              >
                Clear
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    classNames.push('blank');

    return (
      <div className={classNames.join(' ')}>
        <div className="unchosen">
          <button
            type="button"
            className="transfer bicolor button button-secondary action-choose icon icon-doc-empty-inverse"
            onClick={onClickChoose}
          >
            Choose a parent page
          </button>
        </div>
      </div>
    );
  }
}
