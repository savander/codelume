mod handlers;

use std::sync::Mutex;

use actix_web::{middleware, web, App, HttpServer};
use tauri::AppHandle;

struct TauriAppState {
    app: Mutex<AppHandle>,
}

#[actix_web::main]
pub async fn init(app: AppHandle) -> std::io::Result<()> {
    let tauri_app = web::Data::new(TauriAppState {
        app: Mutex::new(app),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(tauri_app.clone())
            .wrap(middleware::Logger::default())
            .service(handlers::api::post_logs_handle)
    })
    .bind(("127.0.0.1", 4875))?
    .run()
    .await
}
