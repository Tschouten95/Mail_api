import express from 'express'
import { getAllAddresses,getAddressById,createAddress,updateAddress,deleteAddress }  from './src/Controllers/addresses'
import { getAllUsers,getUserById, createUser, updateUser, deleteUser } from './src/Controllers/users'
import { getAllPostUnits, getPostUnitById, createPostUnit, updatePostUnit, deletePostUnit } from './src/Controllers/postUnits'
import { getAllRecipients, getRecipientById, createRecipient, updateRecipient, deleteRecipient } from './src/Controllers/recipients'
import { getAllPostalServices, getPostalServiceById, createPostalService, updatePostalService, deletePostalService } from './src/Controllers/postalServices'
import { getAllPostUnitPrices, getPostUnitPriceById, createPostUnitPrice, updatePostUnitPrice, deletePostUnitPrice } from './src/Controllers/postUnitPrices'
import { getAllCountries, getCountryById, createCountry, updateCountry, deleteCountry } from './src/Controllers/countries'
import { sendMultiMail} from './src/PostApis/openapi'
import { getUfficioPostalePricingData, createUfficioPostalePricingData } from './src/PostApis/getpricing'
import { createApiKey, getAllApiKeys, validateApiKey } from './src/Controllers/apiKey'

const app = express()
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))

//Check if api key is valid
app.use(validateApiKey)

//Address Routes
app.get('/addresses', getAllAddresses)
app.get('/addresses/:id', getAddressById)
app.post('/addresses', createAddress)
app.put('/addresses/:id', updateAddress)
app.delete('/addresses/:id', deleteAddress)

//User Routes
app.get('/users', getAllUsers )
app.get('/users/:id', getUserById)
app.post('/users', createUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

//PostUnit Routes
app.get('/postUnits', getAllPostUnits)
app.get('/postUnits/:id', getPostUnitById)
app.post('/postUnits', createPostUnit)
app.put('/postUnits/:id', updatePostUnit)
app.delete('/postUnits/:id', deletePostUnit)

//Recipient Routes
app.get('/recipients', getAllRecipients)
app.get('/recipients/:id', getRecipientById)
app.post('/recipients', createRecipient)
app.put('/recipients/:id', updateRecipient)
app.delete('/recipients/:id', deleteRecipient)

//PostalService Routes
app.get('/postalServices', getAllPostalServices)
app.get('/postalServices/:id', getPostalServiceById)
app.post('/postalServices', createPostalService)
app.put('/postalServices/:id', updatePostalService)
app.delete('/postalServices/:id', deletePostalService)

//PostUnitPrice Routes
app.get('/postUnitPrices', getAllPostUnitPrices)
app.get('/postUnitPrices/:id',  getPostUnitPriceById)
app.post('/postUnitPrices', createPostUnitPrice)
app.put('/postUnitPrices/:id', updatePostUnitPrice)
app.delete('/postUnitPrices/:id', deletePostUnitPrice)

// Country Routes
app.get('/countries', getAllCountries)
app.get('/countries/:id', getCountryById)
app.post('/countries', createCountry)
app.put('/countries/:id', updateCountry)
app.delete('/countries/:id', deleteCountry)

// get pricing data from mailing services
app.get('/fetchdata', getUfficioPostalePricingData)
app.post('/fetchdata', createUfficioPostalePricingData)

// send email
app.post('/sendMultiMail', sendMultiMail)

// api key routes
app.get('/createApiKey', createApiKey)
app.get('/getAllApiKeys', getAllApiKeys)

// start server
const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
