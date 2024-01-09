use actix_web::{post, get, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use tauri::Manager;

use crate::server::TauriAppState;

#[derive(Clone, Serialize, Deserialize)]
struct Payloads {
    #[serde(rename = "type")]
    log_type: String,
    content: serde_json::Value,
    origin: serde_json::Value,
}

#[derive(Clone, Serialize, Deserialize)]
struct LogsFormRequest {
    uuid: String,
    payloads: Vec<Payloads>,
    meta: serde_json::Value,
}

#[derive(Clone, Serialize)]
struct LogsResponse {
    uuid: String,
}

#[post("/")]
pub async fn post_logs_handle(
    data: web::Data<TauriAppState>,
    logs: web::Json<LogsFormRequest>,
) -> impl Responder {
    let tauri_app = &data.app.lock().unwrap();

    tauri_app.emit_all("post-feeds", logs.clone()).unwrap();

    HttpResponse::Ok().json(LogsResponse {
        uuid: logs.uuid.clone(),
    })
}

#[get("/_availability_check")]
pub async fn get_availability_check_handle() -> impl Responder {
    HttpResponse::NotFound()
}
