const CrewMember = (function(){
  return class {
    constructor(obj){
      this.position = obj.position
      this.id = obj.id
      this.currentShip = "Looking for a Rig"
      Store.data.crewMembers.push(this)
    }

    assignShip(ship){
      this.spaceshipId = ship.id
      ship.docked = false
      this.currentShip = ship
    }

    engageWarpDrive(){
      if (this.position === 'Pilot' && this.spaceshipId){
        this.currentShip.warpDrive = "engaged!"
      } else {
        return 'had no effect'
      }
    }

    setsInvisibility(){
      if (this.position === 'Defender' && this.spaceshipId){
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }

    chargePhasers(){
      if (this.position === 'Gunner' && this.spaceshipId){
        this.currentShip.phasersCharge = "charged!"
      } else {
        return 'had no effect'
      }
    }
  }
}())
