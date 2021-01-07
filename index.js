/* eslint-disable no-extend-native */

if (Array.prototype.head === undefined) {
  Array.prototype.head = function () {
    return this.length === 0 ? null : this[0]
  }
}

if (Array.prototype.tail === undefined) {
  Array.prototype.tail = function () {
    return [...this].splice(1)
  }
}

if (Array.prototype.first === undefined) {
  Array.prototype.first = Array.prototype.head
}

if (Array.prototype.last === undefined) {
  Array.prototype.last = function () {
    return this.length === 0 ? null : this[this.length - 1]
  }
}

if (Array.prototype.sum === undefined) {
  Array.prototype.sum = function (field = null) {
    return this.reduce((acc, item) => {
      if (typeof field === 'function') {
        return acc + field(item)
      } else {
        return acc + (field ? item[field] : item)
      }
    }, 0)
  }
}

if (Array.prototype.avg === undefined) {
  Array.prototype.avg = function (field = null) {
    return this.length === 0 ? null : this.sum(field) / this.length
  }
}

if (Array.prototype.sortBy === undefined) {
  Array.prototype.sortBy = function (field = null, order = 1) {
    return [...this].sort((a, b) => {
      if (typeof field === 'function') {
        return (field(a) - field(b)) * order
      } else {
        return (field ? a[field] - b[field] : a - b) * order
      }
    })
  }
}

if (Array.prototype.min === undefined) {
  Array.prototype.min = function (field = null) {
    return this.sortBy(field, 1).first()
  }
}

if (Array.prototype.max === undefined) {
  Array.prototype.max = function (field = null) {
    return this.sortBy(field, -1).first()
  }
}

if (Array.prototype.median === undefined) {
  Array.prototype.median = function (field = null) {
    if (this.length === 0) return null

    const midIndex = Math.floor(this.length / 2)
    return this.sortBy(field)[midIndex]
  }
}

if (Array.prototype.groupBy === undefined) {
  Array.prototype.groupBy = function (field) {
    if (!field) {
      throw new Error('Need a field to group by')
    }
    return this.reduce((acc, item) => {
      if (acc[item[field]]) acc[item[field]].push(item)
      else acc[item[field]] = [item]
      return acc
    }, {})
  }
}

if (Array.prototype.uniq === undefined) {
  Array.prototype.uniq = function (field = null) {
    return [...new Set(this.map(item => {
      if (typeof field === 'function') {
        return field(item)
      } else {
        return field ? item[field] : item
      }
    }))]
  }
}
