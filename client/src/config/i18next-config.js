import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"; //Con esto le dejamos a i18next la tarea de definir el lenguaje por defecto
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es", //Lenguaje por defecto si no existe la traducción para X cadena en el lenguaje actual.
    returnObjects: true,
    joinArrays: "\n",
    resources: {
      //Acá van las traducciones, básicamente.
      es: {
        translation: {
          navigation: {
            goBack: "Volver a Inicio",
            returnToCart: "Volver al carrito",
          },
          accountDetails: {
            btnEditProfile: "Actualizar",
            info: "Detalles",
            email: "Correo: ",
            name: "Nombre: ",
            lastname: "Apellido: ",
            country: "País: ",
            city: "Ciudad: ",
            province: "Provincia: ",
            street: "Calle: ",
            postalCode: "Código postal: ",
          },
          accountDetailsForm: {
            toastInfo: "Tu información ha sido actualizada con éxito.",
            changePassword: "Cambiar la contraseña",
            askPasswordChange:
              "¿Estás seguro de querer modificar tu actual contraseña?",
            confirmPasswordChange:
              "Contraseña actualiza. Por favor revise su casilla de correo.",
            updateInfo: "Actualizar información",
            email: "Dirección de correo",
            name: "Nombre",
            lastname: "Apellido",
            password: "Contraseña",
            image: "Foto de perfil",
            address: "Dirección: ",
            city: "Ciudad...",
            country: "País...",
            postalCode: "Código postal...",
            province: "Provincia/Departamento...",
            street: "Calle y altura...",
          },
          articleFavorites: {
            price: "Precio: ",
            rating: "Valoración general: ",
            productDetails: "Ver detalles",
            removeFavorite: "Remover favorito",
          },
          favorites: {
            favorites: "Favoritos",
          },
          cart: {
            removeFromCart: "Producto apartado del carrito",
            removeEverythingFromCart: "Carrito vaciado con éxito.",
            confirmClearCart: "¿Estás de acuerdo en vaciar tu carrito entero?",
            emptyTheCart: "Vaciar el carrito",
            welcome: "Bienvenido a tu carrito",
            emptyCart: "Tu carrito se encuentra vacío. Añádele algún producto",
            totalPrice: "Total de la compra: ",
            buy: "Realizar la compra",
            successfulPurchase: "¡Compra realizada con éxito!",
            cancelPurchaseSuccess: "Compra cancelada con éxito",
          },
          categoriesComp: {
            error_pos_numbers: "Solo se aceptan números positivos",
            error_valid_numbers: "Por favor utilice valores válidos",
            error_valid_cats: "Por favor elija categorías apropiadas",
            priceRange: "Rango de precio",
            minPrice: "$Min",
            maxPrice: "$Max",
            search: "Buscar",
            sortBy: "Orden",
            asc: "Ascendente",
            des: "Descendente",
          },
          createUserTest: {
            errors_mail_required: "Se requiere una dirección de correo.",
            errors_mail_invalid:
              "Dirección de correo inválida. Prueba con otra.",
            errors_password: "Se requiere una contraseña.",
            errors_password_invalid:
              "La contraseña debe tener entre 8 y 16 caracteres, debe contener contener caracteres en mayúsculas y minúsculas, y al menos 1 número.",
            errors_password_match: "Las contraseñas deben coincidir.",
            createAccount: "Crear una cuenta nueva",
            accountCreated: "¡Cuenta registrada exitosamente! Por favor, chequea tu mail para confirmar tu cuenta",
            name: "Primer nombre...",
            email: "Dirección de correo...",
            password: "Contraseña...",
            confirmPassword: "Confirmar contraseña...",
          },
          formQA: {
            mustLogInToAsk:
              "Necesitas estar registrado para poder realizarle preguntas al vendedor",
            postedQuestion: "¡Pregunta realizada con éxito!",
            askSeller: "Hacerle una pregunta al vendedor",
            askAQuestion: "Pregunta algo...",
            postQuestion: "Realizar la pregunta",
          },
          adminLoggedNavBar: {
            inventory: "Inventario",
            sell: "Vender",
            adminCategories: "Administrar categorías",
            logOut: "Cerrar sesión",
            switch: "Cambiar a modo usuario",
          },
          adminUnloggedNavBar: {
            switch: "Cambiar a modo usuario",
          },
          adminCreateCategory: {
            created: "¡Nueva categoría añadida!",
            postCategory: "Crear nueva categoría",
            name: "Nombre de la categoría...",
            submit: "Añadir nueva categoría",
          },
          adminAddCategories: {
            update: "¡Categoría actualizada con éxito!",
            delete: "Categoría borrada con éxito",
          },
          adminEditProduct: {
            delete: "Producto borrado con éxito",
            deleteProduct: "Eliminar producto",
            update: "Actualizar el producto",
            updated: "¡Producto actualizado con éxito!",
            status: "Estado: ",
            active: "Disponible",
            inactive: "No disponible",
          },
          adminProductCard: {
            edit: "Editar",
            rating: "Valoración: ",
            stock: "Disponibles: ",
            status: "Estado: ",
          },
          adminProductDetails: {
            update: "Actualizar producto",
            categories: "Categorías: ",
            description: "Detalle del producto: ",
            available: "Disponibles: ",
            price: "Precio: ",
          },
          adminSellProduct: {
            errors_name: "Es obligatorio introducir un nombre.",
            errors_price: "Es obligatorio introducir un precio.",
            errors_description: "Es obligatorio introducir una descripción.",
            errors_stock:
              "Es obligatorio introducir la cantidad de unidades disponibles.",
            postProduct: "Nuevo producto",
            name: "Nombre del producto...",
            price: "Precio del producto...",
            description: "Descripción del producto...",
            categories: "Categorías",
            image: "Imagen del producto...",
            status: "Disponibilidad del producto: ",
            stock: "Cantidad disponible: ",
            submit: "¡Publicar!",
            select: "Seleccionar",
          },

          guestNavBar: {
            home: "Inicio",
            categories: "Categorías",
            logIn: "Ingresar/Registrarse",
            cart: "Carrito",
          },

          loggedNavBar: {
            home: "Inicio",
            categories: "Categorías",
            profile: "Perfil",
            accountDetails: "Detalles de la cuenta",
            favorites: "Favoritos",
            logOut: "Cerrar sesión",
            confirmLogOut: "¿Estás seguro de querer cerrar sesión?",
            cart: "Carrito",
            history: "Historial",
            language: "Idioma",
            loggedOut: "Sesión cerrada. Hasta luego",
          },
          adminHome: {
            filter: "Filtrar por:",
            name: "Nombre",
            stock: "Unidades disponibles",
            rating: "Valoración",
            price: "Precio",
            status: "Disponibilidad:",
            active: "Disponible",
            inactive: "No disponible",
            category: "Categoría:",
            order: "Orden:",
            valueAsc: "Ascendente",
            valueDes: "Descendente",
            reset: "Reestablecer los filtros",
          },
          home: {
            altAddToCart: "¡Añadido al carrito!",
            altAlreadyInCart: "El producto ya se encuentra en tu carrito",
            altAddToFavs: "¡Añadido a favoritos!",
            altRemoveFromFavorites: "Producto eliminado de favoritos",
            mustBeLoggedIn:
              "Necesitas estar registrado para añadir productos a tu lista de favoritos",
            logInProducts:
              "Necesitas ingresar para añadir productos al carrito",
          },
          loginAdmin: {
            login: "Ingreso a Administración",
          },
          logInForm: {
            errors_mail_required: "Se requiere una dirección de correo.",
            errors_mail_invalid:
              "Dirección de correo inválida. Prueba con otra.",
            errors_password: "Se requiere una contraseña.",
            logIn: "¡Bienvenido!",
            mail: "Dirección de correo...",
            password: "Contraseña...",
            submit: "Ingresar",
            logInGoogle: "Ingresar con Google",
            notUser: "¿No tienes una cuenta?",
            newUser: "Crear un nuevo usuario",
            loggedIn: "¡Ingreso exitoso!",
          },
          productDetailsInfo: {
            categories: "Categorías: ",
            description: "Detalles del producto: ",
            stock: "Stock actual: ",
            price: "Precio: ",
            qa: "Preguntas acerca de este producto: ",
          },
          searchBar: {
            placeholder: "Buscar...",
            language: "Idioma",
          },
          sendBuys: {
            productsList: "Lista de productos:",
            paymentMethod: "Elija su método de pago preferido",
            card: "Pago con tarjeta",
            cardPay: "Realizar la compra con tarjeta",
            paypal: "Pago mediante PayPal",
            paypalProcessing: "Procesando el pago. Aguarde unos instantes...",
            paypalConfirm: "Realizar la compra mediante PayPal",
            totalPrice: "Precio total: ",
            processingCard: "Procesando el pago. Aguarde un instante...",
          },
        },
      },
      en: {
        translation: {
          categories: [{ name: "Ropa para hombres" }],
          navigation: {
            goBack: "Return to Home",
            returnToCart: "Return to Cart",
          },
          accountDetails: {
            btnEditProfile: "Update profile",
            info: "Personal info",
            email: "Email address: ",
            name: "Name: ",
            lastname: "Lastname: ",
            country: "Country: ",
            city: "City: ",
            province: "State/Department: ",
            street: "Street: ",
            postalCode: "Postal code: ",
          },
          accountDetailsForm: {
            toastInfo: "Your profile has been successfully updated.",
            changePassword: "Change password",
            askPasswordChange:
              "Are you sure you want to modify your current password?",
            confirmPasswordChange:
              "Password updated. Please check your email address.",
            updateInfo: "Update info",
            email: "Email address",
            name: "Name",
            lastname: "Lastname",
            password: "Password",
            image: "Profile avatar",
            address: "Address: ",
            city: "City...",
            country: "Country...",
            postalCode: "Postal code...",
            province: "State/department...",
            street: "Street...",
          },
          articleFavorites: {
            price: "Price: ",
            rating: "Rating: ",
            productDetails: "View details",
            removeFavorite: "Remove from favorites",
          },
          favorites: {
            favorites: "Favorites",
          },
          cart: {
            removeFromCart: "Product removed from cart",
            removeEverythingFromCart: "Cart successfully emptied out.",
            confirmClearCart: "Do you really want to empty out your cart?",
            emptyTheCart: "Empty the cart",
            welcome: "Welcome to your cart",
            emptyCart: "Your cart is currently empty. Add something to it!",
            totalPrice: "Total price for this purchase: ",
            buy: "Buy",
            successfulPurchase: "Purchase successfully done!",
            cancelPurchaseSuccess: "Purchase successfully cancelled",
          },
          categoriesComp: {
            error_pos_numbers: "Only positive numbers allowed",
            error_valid_numbers: "Please insert valid numbers",
            error_valid_cats: "Please choose the appropiate categories",
            priceRange: "Price range",
            minPrice: "$Min",
            maxPrice: "$Max",
            search: "Search",
            sortBy: "Order",
            asc: "Ascending",
            des: "Descending",
          },
          createUserTest: {
            errors_mail_required: "Email address required.",
            errors_mail_invalid: "Email address invalid. Try another one.",
            errors_password: "Password required.",
            errors_password_invalid:
              "Password must have between 8 and 16 characters, it must contain uppercase and lowercase letters, and at least 1 number.",
            errors_password_match: "Passwords must match.",
            createAccount: "Create an account",
            accountCreated: "Account successfully registered!",
            name: "First name...",
            email: "Email address...",
            password: "Password...",
            confirmPassword: "Confirm password...",
          },
          formQA: {
            mustLogInToAsk:
              "You need to be logged in to ask questions to the seller",
            postedQuestion: "Question successfully posted!",
            askSeller: "Ask the seller a question",
            askAQuestion: "As something...",
            postQuestion: "Post question",
          },
          adminLoggedNavBar: {
            inventory: "Stock",
            sell: "Sell",
            adminCategories: "Administer categories",
            logOut: "Log out",
            switch: "Switch to Consumer mode",
          },
          adminUnloggedNavBar: {
            switch: "Switch to Consumer mode",
          },
          adminCreateCategory: {
            created: "New category added!",
            postCategory: "Create a new category",
            name: "Category name...",
            submit: "Submit new category",
          },
          adminAddCategories: {
            update: "Category successfully updated!",
            delete: "Category successfully deleted",
          },
          adminEditProduct: {
            delete: "Product successfully deleted",
            deleteProduct: "Delete product",
            update: "Update product",
            updated: "Product successfully updated!",
            status: "Status: ",
            active: "Active",
            inactive: "Inactive",
          },
          adminProductCard: {
            edit: "Edit",
            rating: "Rating: ",
            stock: "Stock: ",
            status: "Status: ",
          },
          adminProductDetails: {
            update: "Update product",
            categories: "Categories: ",
            description: "Product details: ",
            available: "Available: ",
            price: "Price: ",
          },
          adminSellProduct: {
            errors_name: "Name is required.",
            errors_price: "Price is required.",
            errors_description: "A description is required.",
            errors_stock: "Stock is required.",
            postProduct: "New product",
            name: "Product name...",
            price: "Product price...",
            description: "Product description...",
            categories: "Categories",
            image: "Product images...",
            status: "Product status: ",
            stock: "Stock: ",
            submit: "Publish!",
            select: "Select",
          },

          guestNavBar: {
            home: "Home",
            categories: "Categories",
            logIn: "Log in/Sign up",
            cart: "Cart",
          },

          loggedNavBar: {
            home: "Home",
            categories: "Categories",
            profile: "Profile",
            accountDetails: "Account details",
            favorites: "Favorites",
            confirmLogOut: "Are you sure you want to close your session?",
            logOut: "Log out",
            loggedOut: "Logged out. See you later",
            cart: "Cart",
            history: "History",
            language: "Language",
          },
          adminHome: {
            filter: "Filter by: ",
            name: "Name",
            stock: "Stocl",
            rating: "Rating",
            price: "Price",
            status: "Status:",
            active: "Active",
            inactive: "Inactive",
            category: "Category:",
            order: "Order:",
            valueAsc: "Ascending",
            valueDes: "Descending",
            reset: "Reset",
          },
          home: {
            altAddToCart: "Added to cart!",
            altAlreadyInCart: "Product is already in your cart",
            altAddToFavs: "Added to favorites!",
            altRemoveFromFavorites: "Product removed from favorites",
            mustBeLoggedIn:
              "You need to be logged in to add products to your favorites list",
            logInProducts:
              "You need to be logged in to add products to your cart",
          },
          loginAdmin: {
            login: "Administration panel",
          },
          logInForm: {
            errors_mail_required: "Email address required.",
            errors_mail_invalid:
              "Email address invalidad. Please try another one.",
            errors_password: "Password is required.",
            logIn: "Welcome!",
            mail: "Email address...",
            password: "Password...",
            submit: "Log in",
            logInGoogle: "Log in with Google",
            notUser: "Don't have an account?",
            newUser: "Create a new user",
          },
          productDetailsInfo: {
            categories: "Categories: ",
            description: "Product description: ",
            stock: "Stock: ",
            price: "Price: ",
            qa: "Questions about this product: ",
          },
          searchBar: {
            placeholder: "Search...",
            language: "Language",
          },
          sendBuys: {
            productsList: "Products list:",
            paymentMethod: "Choose your preferred payment method",
            card: "Pay with card",
            cardPay: "Purchase with your card",
            paypal: "Pay with PayPal",
            paypalProcessing: "Processing payment. Please hold on a while...",
            processingCard: "Processing payment. Please hold on a while...",
            paypalConfirm: "Continue to PayPal",
            totalPrice: "Total price: ",
          },
        },
      },
    },
  });

//Cuando queremos usarlo en un componente invocamos al hook useTranslation. Luego dentro de la lógica hacemos lo propio que con cualquier hook -> const {t} = useTranslation()
