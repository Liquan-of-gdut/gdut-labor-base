export const SET_ACTIVE_NAV = (state, data) => {
  state.activeNavIdx = data
}

export const SET_ACTIVE_NAV_SUB = (state, data) => {
  console.log('正在设置navSub...')
  state.activeNavSubIdx = data
}
