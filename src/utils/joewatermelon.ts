const getDogTreat = () => {
  const roll = Math.round(Math.random() * 99);

  if (roll < 33) {
    return 'Finn is a good pupper and gets a treat! joewatFinn';
  } else if (roll < 66) {
    return 'Tilly is a good pupper and gets a treat! joewatTilly';
  } else {
    return 'Zippy is a good pupper and gets a treat! joewatZippy';
  }
};

export default getDogTreat;
