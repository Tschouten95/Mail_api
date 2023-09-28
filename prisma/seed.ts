import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: "alice@smith.com",
    address: {
      create: {
        street: 'Casilina',
        houseNumber: "1049",
        city: 'Roma',
        streetType: 'Via',
        zipcode: '00199',
        provinceCode: 'RM',
        country: {
          create: {
            name: 'Italy',
            code: 'IT',
          }
        }
      }
    }
  },
  {
    firstName: 'Mario',
    lastName: 'Rossi',
    email: "john.doe@openapi.it",
    address: {
      create: {
        street: 'Dante Alighieri',
        houseNumber: "1",
        city: 'Roma',
        streetType: 'Via',
        zipcode: '00199',
        provinceCode: 'RM',
        country: {
          create: {
            name: 'Italy',
            code: 'IT',
          }
        }
      }
    }
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const a of userData) {
    const user = await prisma.user.create({
      data: a,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  // 
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
