import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  const title = () => {
    if (selectedGood?.length === 0) {
      return 'No goods selected';
    }

    return (
      <>
        {selectedGood} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </>
    );
  };

  const button = good => {
    if (good === selectedGood) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => setSelectedGood('')}
        >
          -
        </button>
      );
    }

    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => setSelectedGood(good)}
      >
        +
      </button>
    );
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">{title()}</h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
              key={good}
            >
              <td>{button(good)}</td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
