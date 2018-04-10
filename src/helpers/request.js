import md5 from 'js-md5'

const KEYS = {
  PUBLIC: 'b0f0187cf35355f54cd5b7cc5ba641ee',
  PRIVATE: '611e29bff8893fb1b78b164c85275326b539ee07'
}

const hash = md5("aaa"+ KEYS.PRIVATE + KEYS.PUBLIC) 
//gateway.marvel.com/v1/public/characters?ts=aaa&apikey=b0f0187cf35355f54cd5b7cc5ba641ee&hash=91b8839fac2dad4e59a7bdcdf8ef3557
const URL = "gateway.marvel.com/v1/public/characters?ts="+ Data.now() + "&apikey= " + KEYS.PUBLIC +" &hash=" + hash;

const request = () =>
  fetch('')
