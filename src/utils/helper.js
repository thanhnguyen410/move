export const isEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`)

export const formatMoney = (value, character = '.') => {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)
}

export const formatK = value => {
  const price = Number((Number(value) / 1000).toFixed(2))
  if (price > 1) {
    return price + 'k'
  }
  return value
}

export const rateSale = (original, sale) => Math.round(((original - sale) / original) * 100) + '%'

export const getIdFromNameId = name => {
  const arr = name.split('-i.') || []
  return arr[arr.length - 1]
}

export const showErrorApi = (err, setError) => {
  for (const key in err.data) {
    setError(key, {
      type: 'server',
      message: err.data[key]
    })
  }
}
