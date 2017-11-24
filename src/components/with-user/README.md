# `WithUser`

This is a data fetching component to fetch the logged in user.
You can use this component (or the complementary HoC) to retrieve user data and use it when needed.

The data is cached within Apollo, so rendering the component multiple times won't trigger multiple requests but will load the data from the cache instead.

## `<WithUser>`

A React component that will pass user data to a `render` function.

> This is the React version of the `withUser` HoC.

### Usage

```js
import { WithUser } from '@commercetools-local/application-shell'

<WithUser
  mapDataToProps={userData => userData}
  render={({ userData: { loading, me }, ...rest }) =>
    loading
      ? <Loading />
      : (
        <div>
          <Profile firstName={me.firstName} />
          <Main {...rest} />
        </div>
      )
  }
/>
```

### Properties

| Props | Type | Required | Values | Default  | Description |
| --- | --- | :---: | --- | --- | --- |
| `mapDataToProps` | `func` | - | - | - | Map the props that will be passed to the `render` function. Use this as a chance to compute some values within the data and pass it as a specific prop. |
| `render` | `func` | ✅ | - | - | Render your children elements within this function. The argument is an object containing the mapped data from `mapDataToProps` or the default object injected by `graphql` HoC |


## `withUser(mapDataToProps)`

A HoC component that will inject user data as prop.

> This is the HoC version of the `WithUser` component.

### Usage

```js
import { withUser } from '@commercetools-local/application-shell'

const Profile = props => (
  <div>{props.firstName}</div>
)
withUser(
  userData => ({ firstName: userData.me && userData.me.firstName })
)(Profile)
```

### Arguments

* `mapDataToProps(userData): Object`: map the props that will be injected to the composed component. Use this as a chance to compute some values within the data and pass it s a specific prop.
