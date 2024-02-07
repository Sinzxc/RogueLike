export class Dungeon {
    dungeonWidth = 50;
    dungeonHeight = 50;
    dungeonMap = [];
    minDistanceBetweenRooms = 7;
    roomCount = getRandomInt(3, 6);
    spawnRoomId = getRandomInt(0, this.roomCount);
    rooms = [];

    constructor() {
        this.initializeDungeon();
        this.createRooms();
        this.addSpawn();
    }

    initializeDungeon() {
        for (let i = 0; i < this.dungeonHeight; i++) {
            this.dungeonMap[i] = Array(this.dungeonWidth).fill(1);
        }
    }

    createRoom() {
        const width = getRandomInt(5, 14);
        const height = getRandomInt(5, 14);
        const x = getRandomInt(0, this.dungeonWidth - width);
        const y = getRandomInt(0, this.dungeonHeight - height);
        return { x, y, width, height };
    }

    createRooms() {
        for (let i = 0; i < this.roomCount; i++) {
            let room;
            do {
                room = this.createRoom();
            } while (this.rooms.some(existingRoom => this.isOverlap(existingRoom, room)));
            for (let j = room.y; j < room.y + room.height; j++) {

                for (let k = room.x; k < room.x + room.width; k++) {
                    this.dungeonMap[j][k] = 0;
                }
            }

            this.rooms.push(room);
        }

        for (let i = 0; i < this.rooms.length - 1; i++) {
            this.createCorridor(
                this.rooms[i].x + Math.floor(this.rooms[i].width / 2),
                this.rooms[i].y + Math.floor(this.rooms[i].height / 2),
                this.rooms[i + 1].x + Math.floor(this.rooms[i + 1].width / 2),
                this.rooms[i + 1].y + Math.floor(this.rooms[i + 1].height / 2)
            );
        }
    }

    createCorridor(startX, startY, endX, endY) {
        let currentX = startX;
        let currentY = startY;

        while (currentX !== endX) {
            this.dungeonMap[currentY][currentX] = 0;
            currentX += (endX - startX) / Math.abs(endX - startX);
        }

        while (currentY !== endY) {
            this.dungeonMap[currentY][currentX] = 0;
            currentY += (endY - startY) / Math.abs(endY - startY);
        }
    }

    addSpawn() {
        let haveSpawn = false;
        let room = this.rooms[0];
        for (let j = room.y; j < room.y + room.height; j++) {

            for (let k = room.x; k < room.x + room.width; k++) {
                const centerX = room.x + Math.floor((room.width) / 2);
                const centerY = room.y + Math.floor((room.height) / 2);
                if (k == centerX && j == centerY && !haveSpawn) {
                    this.dungeonMap[j][k] = 2;
                    haveSpawn = true;
                }
            }
        }
    }

    isOverlap(room1, room2) {
        return (
            room1.x < room2.x + room2.width &&
            room1.x + room1.width > room2.x &&
            room1.y < room2.y + room2.height &&
            room1.y + room1.height > room2.y
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
