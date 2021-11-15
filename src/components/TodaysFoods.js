function TodaysFoods(props) {
  return (
    <>
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.todaysFoods.map((todaysFoodObj) => {
          return (
            <li key={todaysFoodObj.name}>
              {todaysFoodObj.quantity} {todaysFoodObj.name} ={' '}
              {todaysFoodObj.calories * todaysFoodObj.quantity} cal
            </li>
          );
        })}
      </ul>
      <strong>
        Total:{' '}
        {props.todaysFoods.reduce(
          (acc, currementElement) =>
            acc + currementElement.calories * currementElement.quantity,
          0
        )}{' '}
        cal
      </strong>
    </>
  );
}

export default TodaysFoods;
