const Spaceship = (function(){
  return class {
    constructor(obj){
      this.name = obj.name
      this.phasers = obj.phasers
      this.shields = obj.shields
      this.cloaked = false
      this.warpDrive = 'disengaged'
      this.phasersCharge = 'uncharged'
      this.docked = this.isDocked()
      this.id = obj.id
      Store.data.spaceships.push(this)
    }
    isDocked(){
      var crew = this.crewMembers()
      return (crew.length === 0 ? true : false)
    }

    crewMembers(){
      return Store.data.crewMembers.filter((member) => {return member.spaceshipId === this.id})
    }
  }
}())
