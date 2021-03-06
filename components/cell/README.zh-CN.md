# Cell 单元格

### 引入

```js
import { Cell, CellGroup } from '@trillion/muld';

```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<CellGroup>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</CellGroup>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<Cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<Cell value="内容" />
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<Cell title="单元格" is-link />
<Cell title="单元格" is-link value="内容" />
<Cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<CellGroup title="分组1">
  <Cell title="单元格" value="内容" />
</CellGroup>
<CellGroup title="分组2">
  <Cell title="单元格" value="内容" />
</CellGroup>
```

### 自定义内容

```html
  <!-- 使用 title 插槽来自定义标题 -->
<Cell value="内容" is-link title={
  <React.Fragment>
    <span className="custom-title">单元格</span>
    <Tag type="danger">标签</Tag>
  </React.Fragment>}>
</Cell>

  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
<Cell title="单元格" icon="shop-o" rightIcon={<Icon name="search" className="search-icon" />}>
</Cell>

<style>
  .custom-title {
    margin-right: 0.25rem;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 1rem;
    line-height: inherit;
  }
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<Cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| title  | 分组标题       | _string_  | `-`    |
| border | 是否显示外边框 | _boolean_ | `true` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mul-icon` |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| titleStyle | 左侧标题额外样式 | _any_ | - |
| titleClass | 左侧标题额外类名 | _any_ | - |
| valueClass | 右侧内容额外类名 | _any_ | - |
| labelClass | 描述信息额外类名 | _any_ | - |
| rightIcon | 自定义右侧按钮，默认为`arrow` | _React.ReactNode_ | - |
| extra      | 自定义单元格最右侧的额外内容  | _React.ReactNode_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数       |
| ------ | ---------------- | -------------- |
| onClick  | 点击单元格时触发 | _event: Event_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |
