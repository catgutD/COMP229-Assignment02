//index.js Cathy Da 301177731 Oct 20

//used to check for a user display name, if user is logged in
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }

    return '';
}

//check if user is logged in or not
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}