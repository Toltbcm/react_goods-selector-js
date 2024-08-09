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

export const Title = ({ selectedGood, setSelectedGood }) => (
  <>
    {selectedGood?.length === 0 ? (
      'No goods selected'
    ) : (
      <>
        {selectedGood} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </>
    )}
  </>
);

export const Button = ({ good, selectedGood, setSelectedGood }) => {
  const isSelected = good === selectedGood;

  return (
    <button
      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
      type="button"
      className={`button ${isSelected ? 'is-info' : ''}`}
      onClick={() => setSelectedGood(isSelected ? '' : good)}
    >
      {isSelected ? '-' : '+'}
    </button>
  );
};

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        <Title selectedGood={selectedGood} setSelectedGood={setSelectedGood} />
      </h1>

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
              <td>
                <Button
                  good={good}
                  selectedGood={selectedGood}
                  setSelectedGood={setSelectedGood}
                />
              </td>
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
