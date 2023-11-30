use actix_web::{post, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use tauri::Manager;

use crate::server::TauriAppState;

#[derive(Serialize, Deserialize)]
struct LogsRequest {
    message: String,
}

#[derive(Clone, Serialize)]
struct LogsResponse {
    message: String,
}

#[post("/api/logs")]
pub async fn post_logs_handle(
    data: web::Data<TauriAppState>,
    logs: web::Json<LogsRequest>,
) -> impl Responder {
    let tauri_app = &data.app.lock().unwrap();

    tauri_app
        .emit_all(
            "post-logs",
            LogsResponse {
                message: logs.message.clone(),
            },
        )
        .unwrap();

    HttpResponse::Ok().json(LogsResponse {
        message: logs.message.clone(),
    })
}
