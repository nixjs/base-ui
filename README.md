
<p align="center">
  <a href="https://base-ui.vercel.app">
      <img width="20%" src="https://raw.githubusercontent.com/nixjs/base-ui/main/baseUIDark.svg" alt="baseui" />
      <h1 align="center">BaseUI</h1>
  </a>
</p>

<p align="center">
A React Component library with completely unstyled, fully accessible UI components.
</p>

## Install

1. Install these dependencies:

```javascript
yarn add @nixjs23n6/baseui-core @nixjs23n6/baseui-[COMPONENT]
// or
npm install @nixjs23n6/baseui-core @nixjs23n6/baseui-[COMPONENT]
//or
pnpm install @nixjs23n6/baseui-core @nixjs23n6/baseui-[COMPONENT]
```

2. Setup: You need to set up the CssBase at the root of your application.

```javascript
import '@nixjs23n6/baseui-core/lib/css/index.min.css'
```

3. Using components: import components if you need. E.g.

```javascript
import { Button } from '@nixjs23n6/baseui-button'
import { Spinner } from '@nixjs23n6/baseui-spinner'

export const Default: React.FC = () => {
    return (
        <div className="container-box">
            <Button type="button" variant="primary" size="md">
                Primary
            </Button>
            <br />
            <br />
            <Button href="demo" as="a" variant="link" size="md">
                Button with a tag
            </Button>
            <br />
            <br />
            <Button as="span" role="button" variant="link" size="md">
                Button with span tag
            </Button>
            <br/>
            <br/>
             <Button type="button" variant="primary" size="xs" isLoading spinnerLoading={<Spinner size="xs" content="loader-1" />}>
                Loading
            </Button>
        </div>
    )
}

```


## Documentation

Visit https://base-ui.vercel.app/ to view the full documentation or https://github.com/nixjs/base-ui/tree/main/packages/website
