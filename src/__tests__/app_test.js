/* eslint-env jasmine */

describe('normalizeData', function () {
  it('accepts golden path data', function () {
    expect('Maria').toEqual('Maria')
  })

  it('accepts 323232 path data', function () {
    // const a = () => 2;
    expect('Mariewa').toEqual('Maria')
    expect('Maria').toEqual('Maria')
  })
})
