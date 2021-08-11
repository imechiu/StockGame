using Microsoft.AspNetCore.Mvc;

namespace StockGame.Controllers
{
    public class EasyStockController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}