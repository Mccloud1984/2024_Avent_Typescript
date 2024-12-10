/*Original Code */
//enum Gift {}

/*Fixed Code */
enum Gift {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cab98956fe840ef560e1201aa7011298d9de0b96
  Coal = 0b0,
  Train = 0b1,
  Bicycle = 0b10,
  SuccessorToTheNintendoSwitch = 0b00100,
  TikTokPremium = 0b01000,
  Vape = 0b10000,
  Traditional = 0b11,
  OnTheMove = 0b11010,
  OnTheCouch = 0b11100,
<<<<<<< HEAD
=======
=======
  Coal = 0,
  Train = 1,
  Bicycle = 2,
  SuccessorToTheNintendoSwitch = 4,
  TikTokPremium = 8,
  Vape = 16,
  Traditional = 3,
  OnTheMove = 26,
  OnTheCouch = 28,
>>>>>>> 7acdbe883be1784b8064ff95f5fc9c2a782b91ce
>>>>>>> cab98956fe840ef560e1201aa7011298d9de0b96
}

//* TESTS CODE ABOVE */

const test = <F extends Gift>(flag: F) => flag;

test<Gift.Coal>(0);
test<Gift.Train>(1);
test<Gift.Bicycle>(2);
test<Gift.SuccessorToTheNintendoSwitch>(4);
test<Gift.TikTokPremium>(8);
test<Gift.Vape>(16);
test<Gift.Traditional>(3);
test<Gift.OnTheMove>(26);
test<Gift.OnTheCouch>(28);

// @ts-expect-error
test<Gift.Coal>(10);
// @ts-expect-error
test<Gift.Train>(11);
// @ts-expect-error
test<Gift.Bicycle>(12);
// @ts-expect-error
test<Gift.SuccessorToTheNintendoSwitch>(14);
// @ts-expect-error
test<Gift.TikTokPremium>(18);
// @ts-expect-error
test<Gift.Vape>(116);
// @ts-expect-error
test<Gift.Traditional>(13);
// @ts-expect-error
test<Gift.OnTheMove>(126);
// @ts-expect-error
test<Gift.OnTheCouch>(124);
