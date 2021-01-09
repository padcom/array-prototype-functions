import './avg'
import './first'
import './group-by'
import './head'
import './last'
import './max'
import './median'
import './min'
import './sort-by'
import './sum'
import './tail'
import './uniq'

const a = [{ x: 1 }, { x: 2 }].avg(item => item.x)
const b = [1].sum()
const c: number[] = []
c.push(1)
c.avg(x => x)
const d = [{ x: 1 }, { x: 2 }].groupBy('x')
const e = d['1']
const f = [{ x: 1 }, { x: 2 }].uniq(item => item.x)
const g = [{ x: 1 }, { x: 2 }].uniq<number>('x')
