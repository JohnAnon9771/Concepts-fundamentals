-- @004 countNeg
vet = [1,-1,2,-3,4]

countNeg :: [Integer] -> Int
countNeg x
  | x < 0 = 1 + countNeg x


-- main = do
--   a <- readLn :: IO [Int]
--   print $ countNeg a