class Desk {
    constructor(width, height, length, legsLength, tableArea, monitorOpen) {
      this.width = width;
      this.height = height;
      this.length = length;
      this.legsLength = legsLength;
      this.tableArea = tableArea;
      this.monitorOpen = monitorOpen;
    }
  
    monitorChangeStatus(monitorStatus){
      this.monitorOpen = monitorStatus;
    }
  }

  export default Desk;